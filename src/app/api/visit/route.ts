import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const { userAgent, screenWidth, screenHeight, referrer, currentUrl, language } =
            await req.json()

        const webhookUrl = process.env.DISCORD_WEBHOOK_URL

        if (!webhookUrl) {
            return NextResponse.json({ message: 'Webhook URL not configured' }, { status: 500 })
        }

        const clientIp = req.headers.get('x-forwarded-for') || '未知'

        const payload = {
            username: '網站訪問通知',
            avatar_url: 'https://your-website.com/your-bot-avatar.png',
            embeds: [
                {
                    title: '🚀 新的網站訪問！',
                    description: `網站於 ${new Date().toLocaleString('zh-TW')} 被訪問。`,
                    color: 5814783,
                    fields: [
                        {
                            name: '🌐 客戶端 IP',
                            value: clientIp,
                            inline: true
                        },
                        {
                            name: '🖥️ 螢幕尺寸',
                            value: `${screenWidth}x${screenHeight}`,
                            inline: true
                        },
                        {
                            name: '🌍 訪客 User-Agent',
                            value: `\`\`\`${userAgent.substring(0, 500)}\`\`\` ${
                                userAgent.length > 500 ? '...' : ''
                            }`,
                            inline: false
                        },
                        {
                            name: '🔗 來源頁面 (Referrer)',
                            value: referrer ? `[${referrer}](${referrer})` : '直接訪問或無來源',
                            inline: false
                        },
                        {
                            name: '當前 URL',
                            value: currentUrl,
                            inline: false
                        },
                        {
                            name: '瀏覽器語言',
                            value: language,
                            inline: true
                        }
                    ],
                    timestamp: new Date().toISOString(),
                    footer: {
                        text: '來自你的網站',
                        icon_url: 'https://your-website.com/your-website-icon.png'
                    }
                }
            ],
            content: `網站被訪問了！IP: ${clientIp}, 螢幕: ${screenWidth}x${screenHeight}, User-Agent: ${userAgent}`
        }

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        if (response.ok) {
            return NextResponse.json({ message: 'Visit notification sent' }, { status: 200 })
        } else {
            console.error('Failed to send webhook:', response.status, await response.text())
            return NextResponse.json(
                { message: 'Failed to send visit notification' },
                { status: 500 }
            )
        }
    } catch (error) {
        console.error('Error processing visit:', error)
        return NextResponse.json(
            { message: 'Internal Server Error', error: (error as Error).message },
            { status: 500 }
        )
    }
}

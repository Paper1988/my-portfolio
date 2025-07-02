// src/app/api/visit/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        // 1. 解析前端發送過來的 JSON 數據
        const { userAgent, screenWidth, screenHeight, referrer, currentUrl, language } =
            await req.json()

        const webhookUrl = process.env.DISCORD_WEBHOOK_URL

        if (!webhookUrl) {
            return NextResponse.json({ message: 'Webhook URL not configured' }, { status: 500 })
        }

        // 獲取伺服器端的 IP 地址 (這是 Next.js 環境中獲取客戶端 IP 的一種方式)
        // 注意：在 Vercel 等部署環境中，X-Forwarded-For 會包含真實 IP
        const clientIp = req.headers.get('x-forwarded-for') || req.ip || '未知'

        // 2. 構建更詳細的 webhook payload
        // 你可以根據 Discord Webhook 的格式要求來構建 payload
        // 例如，使用 embeds 讓訊息更美觀
        const payload = {
            username: '網站訪問通知', // Webhook 發送者的名稱
            avatar_url: 'https://your-website.com/your-bot-avatar.png', // Webhook 發送者的頭像 URL
            embeds: [
                {
                    title: '🚀 新的網站訪問！',
                    description: `網站於 ${new Date().toLocaleString('zh-TW')} 被訪問。`,
                    color: 5814783, // 藍綠色，Discord 顏色代碼
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
                            }`, // 限制長度防止過長
                            inline: false // 讓 User-Agent 獨佔一行
                        },
                        {
                            name: '🔗 來源頁面 (Referrer)',
                            value: referrer ? `[${referrer}](${referrer})` : '直接訪問或無來源', // 如果有 referrer，提供連結
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
                    timestamp: new Date().toISOString(), // 訊息時間戳
                    footer: {
                        text: '來自你的網站',
                        icon_url: 'https://your-website.com/your-website-icon.png' // 網站圖標
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

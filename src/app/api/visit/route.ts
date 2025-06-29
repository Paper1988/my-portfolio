import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL

        if (!discordWebhookUrl) {
            console.error('Discord Webhook URL is not set in environment variables.')
            return NextResponse.json({ message: 'Server configuration error.' }, { status: 500 })
        }

        // 獲取一些訪問者資訊 (可選，但很有用)
        // 實際生產環境可能需要更嚴謹的 IP 獲取方式，例如從 proxy header
        const userAgent = request.headers.get('user-agent') || '未知瀏覽器'
        const ipAddress = request.headers.get('x-forwarded-for') || '未知IP' // Vercel 會提供 x-forwarded-for

        // 構建要發送到 Discord 的訊息 (JSON 格式)
        const messagePayload = {
            content: '🎉 **作品集有新訪客！**', // 主要通知內容
            embeds: [
                {
                    title: '訪客資訊',
                    description: `有人在 ${new Date().toLocaleString('zh-TW', {
                        timeZone: 'Asia/Taipei'
                    })} 訪問了你的作品集。`,
                    color: 5814783, // Discord 顏色代碼 (藍綠色)
                    fields: [
                        {
                            name: '來源 IP',
                            value: `\`${ipAddress}\``, // 用 markdown code block 包裹
                            inline: true
                        },
                        {
                            name: '瀏覽器/系統',
                            value: `\`${userAgent.substring(0, 100)}...\``, // 截斷過長的 user agent
                            inline: false
                        }
                        // 你可以在這裡添加更多資訊，例如 referer, 頁面路徑等
                    ],
                    footer: {
                        text: '來自你的個人作品集',
                        icon_url: 'https://your-portfolio-domain.com/favicon.ico' // 替換成你的網站 favicon
                    }
                }
            ]
        }

        // 發送 POST 請求到 Discord Webhook
        const response = await fetch(discordWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(messagePayload)
        })

        if (response.ok) {
            console.log('Webhook notification sent successfully.')
            return NextResponse.json({ message: 'Notification sent.' })
        } else {
            const errorText = await response.text()
            console.error('Failed to send Webhook notification:', response.status, errorText)
            return NextResponse.json(
                { message: 'Failed to send notification.' },
                { status: response.status }
            )
        }
    } catch (error) {
        console.error('Error in Webhook API route:', error)
        return NextResponse.json({ message: 'Internal server error.' }, { status: 500 })
    }
}

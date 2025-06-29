// src/app/api/visit/route.ts
import { NextResponse } from 'next/server'

// 輔助函數：解析 User-Agent 來獲取裝置類型
function getDeviceType(userAgent: string): string {
    if (!userAgent) return '未知裝置'
    userAgent = userAgent.toLowerCase()
    if (
        userAgent.includes('mobile') ||
        userAgent.includes('android') ||
        userAgent.includes('iphone') ||
        userAgent.includes('ipad')
    ) {
        if (userAgent.includes('ipad')) return '平板'
        return '手機'
    }
    if (userAgent.includes('tablet')) return '平板' // 有些平板會單獨標註 tablet
    if (
        userAgent.includes('windows') ||
        userAgent.includes('macintosh') ||
        userAgent.includes('linux')
    ) {
        return '桌面電腦'
    }
    return '其他裝置'
}

export async function POST(request: Request) {
    try {
        const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL
        const ipApiKey = process.env.IP_API_KEY // 如果你使用需要金鑰的 IP API 服務

        if (!discordWebhookUrl) {
            console.error('Discord Webhook URL is not set in environment variables.')
            return NextResponse.json({ message: 'Server configuration error.' }, { status: 500 })
        }

        // 獲取原始的 User-Agent
        const rawUserAgent = request.headers.get('user-agent') || ''
        const deviceType = getDeviceType(rawUserAgent)

        let country = '未知國家'
        try {
            // 向 IP-API.com 發送請求來獲取地理位置資訊
            // 使用 `http://ip-api.com/json` 會自動檢測發送請求的 IP
            // 如果你需要指定 IP，則為 `http://ip-api.com/json/{ip}`
            // 對於 Next.js API 路由，請求是從伺服器發出的，所以 IP-API 會讀取到伺服器訪問者的 IP
            const geoResponse = await fetch(
                `http://ip-api.com/json${ipApiKey ? `?key=${ipApiKey}` : ''}`
            )
            const geoData = await geoResponse.json()

            if (geoResponse.ok && geoData.status === 'success') {
                country = geoData.country || '未知國家'
            } else {
                console.warn(
                    'Failed to get geolocation from IP-API:',
                    geoData.message || 'Unknown error'
                )
            }
        } catch (geoError) {
            console.error('Error fetching geolocation:', geoError)
        }

        // 構建要發送到 Discord 的訊息 (JSON 格式)
        const messagePayload = {
            content: '🎉 **作品集有新訪客！**', // 主要通知內容
            embeds: [
                {
                    title: '網站訪問通知',
                    description: `你的個人作品集在 ${new Date().toLocaleString('zh-TW', {
                        timeZone: 'Asia/Taipei'
                    })} 被訪問了。`,
                    color: 5814783, // Discord 顏色代碼 (藍綠色)
                    fields: [
                        {
                            name: '裝置類型',
                            value: deviceType,
                            inline: true
                        },
                        {
                            name: '訪客國家',
                            value: country,
                            inline: true
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

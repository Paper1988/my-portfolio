const { translate } = require('@vitalets/google-translate-api')
const fs = require('fs')

const source = JSON.parse(fs.readFileSync('src/messages/zh-TW.json', 'utf-8'))
const targets = ['en', 'ja']

const run = async () => {
    for (const targetLang of targets) {
        const result = {}
        for (const [key, value] of Object.entries(source)) {
            try {
                const res = await translate(value, { to: targetLang })
                result[key] = res.text
                console.log(`[✓] ${key} -> (${targetLang}) ${res.text}`)
            } catch (err) {
                console.error(`[X] Failed to translate "${key}":`, err.message)
            }
        }
        fs.writeFileSync(`src/messages/${targetLang}.json`, JSON.stringify(result, null, 2))
    }
}

run()

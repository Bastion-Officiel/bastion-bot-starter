/**
 * ====================================================
 *  BASTION Bot Starter — Modèle Officiel
 *  Créez votre propre bot en quelques minutes !
 * ====================================================
 */

require("dotenv").config();
const { Client, GatewayIntentBits, Events } = require("@bastion-hub/bastion.js");

// ─── Initialisation du Client ────────────────────────
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const PREFIX = process.env.PREFIX || "!";

// ─── Bot Prêt ────────────────────────────────────────
client.on(Events.ClientReady, (readyClient) => {
    console.log("╔════════════════════════════════════════════╗");
    console.log(`║  🤖  ${readyClient.user.username} est en ligne !`);
    console.log(`║  🏰  ${readyClient.guilds?.cache?.size || 1} serveur(s) connecté(s)`);
    console.log(`║  ⚡  Préfixe : "${PREFIX}"`);
    console.log("╚════════════════════════════════════════════╝");
});

// ─── Gestion des Commandes ───────────────────────────
client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;

    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    switch (command) {
        // ── !ping ──────────────────────────────────
        case "ping": {
            const sent = await message.reply("🏓 Calcul de la latence...");
            const latency = Date.now() - message.createdTimestamp;
            await sent.edit(`🏓 **Pong !** Latence : \`${latency}ms\``);
            break;
        }

        // ── !help ──────────────────────────────────
        case "help": {
            await message.reply(
                `📖 **Commandes disponibles :**\n` +
                `\`${PREFIX}ping\` — Vérifier la latence du bot\n` +
                `\`${PREFIX}help\` — Afficher cette aide\n` +
                `\`${PREFIX}info\` — Informations sur le bot\n` +
                `\`${PREFIX}say <texte>\` — Faire parler le bot\n` +
                `\`${PREFIX}avatar [@membre]\` — Afficher un avatar\n` +
                `\`${PREFIX}clear <nombre>\` — Supprimer des messages`
            );
            break;
        }

        // ── !info ──────────────────────────────────
        case "info": {
            await message.reply(
                `🏰 **BASTION Bot Starter**\n` +
                `SDK : \`@bastion-hub/bastion.js\`\n` +
                `Serveurs : ${client.guilds?.cache?.size || 1}\n` +
                `Préfixe : \`${PREFIX}\``
            );
            break;
        }

        // ── !say <texte> ───────────────────────────
        case "say": {
            const text = args.join(" ");
            if (!text) {
                return message.reply("⚠️ Utilisation : `!say <votre message>`");
            }
            await message.channel.send(text);
            break;
        }

        // ── !avatar [@mention] ─────────────────────
        case "avatar": {
            const target = message.mentions.users.first() || message.author;
            const avatarUrl = target.avatarUrl || target.displayAvatarURL?.({ size: 512 }) || "Aucun avatar";
            await message.reply(`🖼️ **Avatar de ${target.username} :**\n${avatarUrl}`);
            break;
        }

        // ── !clear <nombre> ────────────────────────
        case "clear": {
            const amount = parseInt(args[0]);
            if (!amount || amount < 1 || amount > 100) {
                return message.reply("⚠️ Utilisation : `!clear <1-100>`");
            }
            try {
                const deleted = await message.channel.bulkDelete(amount + 1, true);
                const confirm = await message.channel.send(`🗑️ **${deleted.size - 1} message(s) supprimé(s).**`);
                setTimeout(() => confirm.delete?.().catch(() => {}), 3000);
            } catch (err) {
                await message.reply("❌ Impossible de supprimer les messages.");
            }
            break;
        }
    }
});

// ─── Connexion ───────────────────────────────────────
const token = process.env.BOT_TOKEN;
if (!token) {
    console.error("╔════════════════════════════════════════════╗");
    console.error("║  ❌  BOT_TOKEN manquant dans .env !        ║");
    console.error("║  📝  Copiez .env.example → .env            ║");
    console.error("║  🔑  Collez votre token du Portail Dev     ║");
    console.error("╚════════════════════════════════════════════╝");
    process.exit(1);
}

client.login(token);

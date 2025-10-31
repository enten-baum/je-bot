import "dotenv/config";
import { Client } from "discord.js";

const client = new Client({ intents: [] });

client.on("clientReady", () => {
	console.log("Logged in as", client.user?.tag);
});

client.login(process.env.TOKEN);

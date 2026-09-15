/* =====================================================================
   PETTEK SITE CONFIG: the only file you edit to run the site.

   Before launch: fill in links.x, links.telegram and launchISO.
   On launch day: from the tek-coin folder run
     powershell -ExecutionPolicy Bypass -File .\set-launch.ps1 -Contract <mint> -DevWallet <wallet>
   It checks the addresses on-chain and writes them below for you.

   Anything left empty shows a safe "posts at launch" state.
   ===================================================================== */
window.TEK = {
  ticker: "$PETTEK",
  contract: "",                      // mint address; set on launch day
  launchISO: "2026-09-18T16:00:00Z",                     // e.g. "2026-10-01T16:00:00Z"; counts down before launch, uptime after

  links: {
    x: "https://x.com/letspettek",                           // https://x.com/yourhandle
    telegram: "https://t.me/letspettek",                    // https://t.me/yourgroup
    stickers: "",                    // https://t.me/addstickers/yourpack
    store: "https://gimmiepets.com",
    pumpfun: "",                     // optional; derived from contract if empty
    dexscreener: "",                 // optional; derived from contract if empty
    jupiter: "",                     // paste after graduation; buy buttons switch to it
  },

  wallets: {
    dev: "",                         // deployer / dev-buy wallet
    devLockUrl: "",                  // lock link for the dev buy
    creatorFees: "",                 // wallet receiving pump.fun creator fees
  },

  // status: planned | building | shipped | deprecated
  roadmap: [
    { ver: "v0.1", name: "Boot", status: "building", text: "Fair launch on pump.fun. This site, the meme generator and a sticker pack. Every wallet published." },
    { ver: "v0.2", name: "The Kennel", status: "building", text: "Telegram opens with handlers and scam protection. First Friday patch notes. First treat bounty." },
    { ver: "v0.5", name: "Graduation", status: "planned", text: "Pool moves to PumpSwap. DexScreener, RugCheck and GeckoTerminal profiles filled in. A second unit joins the pack." },
    { ver: "v1.0", name: "TEK Bot", status: "planned", text: "A Telegram bot that sniffs out rugs: make TEK memes in chat, pull the contract, and check any Solana token." },
    { ver: "v1.5", name: "Meme engine", status: "planned", text: "Animated screens, more stickers and a community gallery." },
    { ver: "v2.0", name: "Pack perks", status: "planned", text: "Perks for holders: early tool access, bot features and merch drops." },
    { ver: "v3.0", name: "Merch", status: "planned", text: "TEK plush, collar tags and keycaps. Hackathon side-prizes for projects that actually ship." },
  ],
};

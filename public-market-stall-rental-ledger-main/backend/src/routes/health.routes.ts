import { Router } from "express";

export const healthRouter = Router();

healthRouter.get("/", (_request, response) => {
  response.json({
    ok: true,
    project: "Public Market Stall Rental Ledger",
    network: process.env.STELLAR_NETWORK ?? "testnet",
    rpcUrl: process.env.STELLAR_RPC_URL ?? "https://soroban-testnet.stellar.org",
  });
});

const state = globalThis.__pollState ?? (globalThis.__pollState = {
  github: { yes: 0, no: 0 },
  claudecode: { yes: 0, no: 0 },
  vercel: { yes: 0, no: 0 },
});

export default function handler(req, res) {
  if (req.method === "POST") {
    const { q, choice } = req.query;
    if (state[q] && (choice === "yes" || choice === "no")) {
      state[q][choice]++;
    }
  }
  res.status(200).json(state);
}

export default function handler(req, res) {
  if (req.method == "POST") {
    const name = req.body.name;

    res.status(200).json({ message: `Hello, ${name}` });
  }
}

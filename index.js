const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// --- Datos en memoria (demo) ---
let estudiantes = [
  { id: 1, nombre: "Ana Pérez", carrera: "Sistemas", edad: 21 },
  { id: 2, nombre: "Luis Gómez", carrera: "Electrónica", edad: 22 }
];
let nextId = 3;

// Salud
app.get('/', (req, res) => {
  res.json({ ok: true, mensaje: 'API de Estudiantes en Express funcionando 🚀' });
});

// GET /estudiantes → listar
app.get('/estudiantes', (req, res) => {
  res.json(estudiantes);
});

// GET /estudiantes/:id → obtener 1
app.get('/estudiantes/:id', (req, res) => {
  const id = Number(req.params.id);
  const est = estudiantes.find(e => e.id === id);
  if (!est) return res.status(404).json({ error: 'Estudiante no encontrado' });
  res.json(est);
});

// POST /estudiantes → crear
app.post('/estudiantes', (req, res) => {
  const { nombre, carrera, edad } = req.body || {};
  if (!nombre || !carrera || typeof edad !== 'number') {
    return res.status(400).json({ error: 'Campos requeridos: nombre, carrera, edad (number)' });
  }
  const nuevo = { id: nextId++, nombre, carrera, edad };
  estudiantes.push(nuevo);
  res.status(201).json(nuevo);
});

// PUT /estudiantes/:id → actualizar
app.put('/estudiantes/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = estudiantes.findIndex(e => e.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Estudiante no encontrado' });

  const { nombre, carrera, edad } = req.body || {};
  if (!nombre || !carrera || typeof edad !== 'number') {
    return res.status(400).json({ error: 'Campos requeridos: nombre, carrera, edad (number)' });
  }
  estudiantes[idx] = { id, nombre, carrera, edad };
  res.json(estudiantes[idx]);
});

// DELETE /estudiantes/:id → eliminar
app.delete('/estudiantes/:id', (req, res) => {
  const id = Number(req.params.id);
  const existe = estudiantes.some(e => e.id === id);
  if (!existe) return res.status(404).json({ error: 'Estudiante no encontrado' });
  estudiantes = estudiantes.filter(e => e.id !== id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
});

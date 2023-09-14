import express from 'express'

import { PrismaClient } from '@prisma/client'

const PORT = 8765
const app = express()
app.use(express.json())

const prisma = new PrismaClient()

app.get('/users', async (req, res) => {

  await prisma.user.create({
    data: {
      name: `User ${new Date().toISOString()}`,
      email: `user${new Date().toISOString()}@email.com`,
      password: 'pass123456'
    }
  })

  const users = await prisma.user.findMany()
  res.json({users})
})

app.listen(PORT, () => console.log(`server started at port ${PORT}`))
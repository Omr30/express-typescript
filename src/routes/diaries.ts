import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send('Fetching all entry diaries')
})

router.post('/', (req, res) => {
  res.send('Saving a diary!')
})

export default router

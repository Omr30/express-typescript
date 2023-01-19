import { Router } from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils/utils'

const router = Router()

router.get('/', (req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)

  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addedDiaryEntry)
  } catch (error) {
    let message = 'Unknown Error'
    if (error instanceof Error) message = error.message

    res.status(400).json({ message })
  }
})

export default router

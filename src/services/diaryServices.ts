/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { DiaryEntry } from '../interface/types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = () => diaries

export const addEntry = (): undefined => undefined

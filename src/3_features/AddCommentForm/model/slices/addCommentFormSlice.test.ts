import { AddCommentFormSchema } from '3_features/AddCommentForm'
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice'

describe('addCommentFormSlice', () => {
  it('should handle setText', () => {
    const initialState: AddCommentFormSchema = {
      text: '',
    }

    const expectedState: AddCommentFormSchema = {
      ...initialState,
      text: 'new comment',
    }

    expect(addCommentFormReducer(initialState, addCommentFormActions.setText('new comment')))
      .toEqual(expectedState)
  })

  it('should return the initial state', () => {
    const initialState: AddCommentFormSchema = {
      text: '',
    }

    expect(addCommentFormReducer(undefined, { type: undefined }))
      .toEqual(initialState)
  })

  it('should handle unknown actions without changing state', () => {
    const initialState: AddCommentFormSchema = {
      text: '',
    }

    expect(addCommentFormReducer(initialState, { type: 'unknown' }))
      .toEqual(initialState)
  })
})

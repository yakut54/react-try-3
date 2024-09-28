import { StateSchema } from '0_app/providers/StoreProvider'
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '3_features/AddCommentForm/model/selectors/getAddCommentForm'

describe('getAddCommentForm', () => {
  it('return form text', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: '',
        text: 'Ехал Грека через реку...',
      },
    }

    expect(getAddCommentFormText(state as StateSchema)).toEqual('Ехал Грека через реку...')
  })

  it('return empty string', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: '',
        text: '',
      },
    }

    expect(getAddCommentFormText(state as StateSchema)).toEqual('')
  })

  it('return error', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: 'error',
        text: '',
      },
    }

    expect(getAddCommentFormError(state as StateSchema)).toEqual('error')
  })
})

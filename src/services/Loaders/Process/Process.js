import * as API from 'services/Endpoints'
import * as UTIL from 'utils'

import * as Messages from '../messages'

export const loadProcess = async (params) => {
  try {
    const { data } = await API.getProcess(params)
    return data || {}
  } catch (err) {
    console.error(err)

    UTIL.Notifications.createDangerNotification({
      message: err?.response?.data?.status_message || Messages.ERROR.DEFAULT,
    })

    return {}
  }
}

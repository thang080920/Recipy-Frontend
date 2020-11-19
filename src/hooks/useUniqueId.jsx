import { useState } from 'react'
import uniqueId from 'lodash/uniqueId'

const useUniqueId = prefix => {
	const [id] = useState(uniqueId(prefix))

	return id
}

export default useUniqueId

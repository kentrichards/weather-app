// Via: https://www.caktusgroup.com/blog/2020/07/01/usekeypress-hook-react/
import { useEffect } from 'react'

/**
 * useKeyPress
 * @param {string} keyCode - the name of the key to respond to, compared against event.key
 * @param {function} action - the action to perform on key press
 */
const useKeyPress = (keyCode, action) => {
  useEffect(() => {
    function onKeyup(e) {
      if (e.key === keyCode) action()
    }

    window.addEventListener('keyup', onKeyup)
    return () => window.removeEventListener('keyup', onKeyup)
  }, [keyCode, action])
}

export default useKeyPress

const crypto = require('crypto')

/**
 * Make a SHA256 hash with optional salt
 * @param {string} data
 * @param {string} [salt]  
 * @returns {string} with the hashed value.
 */
const createHash = function (data: string, salt?: string) {
  let sum = crypto.createHash('sha256')
  sum.update(data + salt)
  return sum.digest('hex')
}

/**
 * Compare two hashes 
 * @param {string} input
 * @param {string} compareTo
 * @param {string} [salt]
 */
const compareHash = function (input: string, savedHash: string, salt?: string) {
  const hashedAttempt = createHash(input)
  return savedHash === hashedAttempt
}

export default createHash
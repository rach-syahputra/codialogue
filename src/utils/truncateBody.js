function truncateBody (body, maxLength) {
  if (body.length <= maxLength) {
    return body
  }

  return `${body.slice(0, maxLength - 3)}...`
}

export default truncateBody

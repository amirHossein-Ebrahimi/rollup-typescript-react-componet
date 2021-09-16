export const setupDomNode = (): HTMLDivElement => {
  const selectorId = 'selector-id'
  let node = document.getElementById(selectorId) as HTMLDivElement
  if (!node) {
    node = document.createElement<'div'>('div')
    node.setAttribute('id', selectorId)
    document.body.appendChild(node)
  }
  return node
}

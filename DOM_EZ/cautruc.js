/**
 * node data type
 *                                           EventTarget
 *                                                ^
 *                                                |
 *                                    ----------->Node<-------------
 *                                    ^           ^                ^
 *                                    |           |                |
 *                                  text         Element         Comment
 *                                                ^
 *                                                |
 *                            ------------------> HTMLElement<--------------
 *                            ^                   ^                        ^
 *                            |                   |                        |
 *                            |                   |                        |
 *                      HTMLInputElement         HTMLBodyElement    HTMLAnchorElement
 *
 */

/**
 * ! EventTarget interface
 *
 * EventTarget.addEventListener()
 * EventTarget.removeEventListener()
 */

/**
 * ! Node Interface
 *
 * Node.childNodes
 * Node.firstChild
 * Node.lastChild
 * Node.previousSibling
 * Node.nextSibling
 * Node.nodeName
 * ! Node.nodeType
 * Node.nodeValue
 * Node.parentNode
 * Node.parentElement
 * ! Node.textContent
 */

/**
 * ! Node method
 *
 * Node.insertBefore(newNode, referenceNode)
 * Node.appendChild(childNode)
 * Node.cloneNode(deep) - deep = true/false
 * Node.contains(otherNode)
 * Node.hasChildNodes()
 * Node.removeChild(childNode)
 * Node.replaceChild(newChild, oldChild)
 */

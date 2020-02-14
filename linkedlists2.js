class _Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

//Create link class and create singly linked list

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item){
        this.head = new _Node(item, this.head);
    }

    insertLast(item){
        if(this.head === null){
            this.insertFirst(item)
        }
        else{
            let tempNode = this.head;
            while(tempNode.next !== null){
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    find(item){
        let currNode = this.head;
        if(!this.head){
            return null;
        }
        while(currNode.value !== item){
            if(currNode.next === null){
                return null
            }
            else {
                currNode = currNode.next;
            }
        }   
        return currNode;
    }

  insertBefore(newItem, searchItem){
      let currNode = this.head
      let prevNode = this.head;
      if(!this.head){
        return null;
      }
      if(this.head.value === searchItem){
        this.head = new _Node(newItem, this.head)
        return;
      }
      while((currNode !== null) && (currNode.value !== searchItem)){
        prevNode = currNode
        currNode = currNode.next;
  }
    if(currNode === null){
      console.log('item not found')
      return;
    }
    prevNode.next = new _Node(newItem, currNode)
    }

    insertAfter(newItem, searchItem){
      let currNode = this.head
      let nextNode = this.head.next;
      if(!this.head){
        return null;
      }
      while((currNode !== null && currNode.value !== searchItem)){
        currNode = currNode.next;
      }
      if(currNode === null){
        console.log('item not found')
        return;
      }
      currNode.next = new _Node(newItem, currNode.next)
    }

    insertAt(newItem, index){
      let currIndex = 0
      let currNode = this.head
      let prevNode = this.head
      if(!this.head){
        return null;
      }
      while(currIndex < index){
        prevNode = currNode
        currNode = currNode.next
        currIndex ++
      }
      if(currNode === null){
        console.log('item not found')
        return;
      }
      prevNode.next = new _Node(newItem, currNode)
    }

    remove(item){
        if(!this.head){
            return null;
        }
        if(this.head.value === item){
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;
        while((currNode !== null) && (currNode.value !== item)){
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null){
            console.log('item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}



function main(){
  const List = new LinkedList();
  const EmptyList = new LinkedList();

  List.insertFirst('Apollo');
  List.insertLast('Boomer');
  List.insertLast('Helo');
  List.insertLast('Husker');
  List.insertLast('Starbuck')
  List.insertLast('Tauhida')
  List.insertBefore('Athena', 'Boomer')
  List.insertAfter('Hotdog', 'Helo')
  List.insertAt('Kat', 3)
  List.remove('Tauhida')

  console.log(List.find('Athena'))
  console.log(List.find('Hotdog'))
  console.log(List.find('Kat'))
  console.log(List.find('Tauhida'))

  console.log(listSize(List))
  console.log(isListEmpty(List))
  console.log(isListEmpty(EmptyList))
  console.log(displayList(List))
  console.log(findLast(List))
  console.log(findprev(List, 'Hotdog'))

  console.log(findThirdLast(List))

  console.log(findMiddle(List))

  console.log(ReverseList(List))
}



//Supplemental functions
function displayList(list){
  let currNode = list.head
  let prevNode = list.head
  let listArray = []
  while(currNode !== null){
    prevNode = currNode
    listArray.push(currNode.value)
    currNode = currNode.next
  } return listArray
}

function listSize(list){
  let currIndex = 0;
  let currNode = list.head
  let prevNode = list.head
  while(currNode !== null){
    prevNode = currNode
    currNode = currNode.next
    currIndex ++
  }
  return currIndex
}

function isListEmpty(list){
  if(!list.head){
    return true
  } return false
}

function findLast(list){
  let currNode = list.head
  let prevNode = list.head
  while(currNode !== null){
    prevNode = currNode
    currNode = currNode.next
  } 
  return prevNode
}

function findprev(list, item){
  let currNode = list.head
  let prevNode = list.head
  while(currNode !== null && currNode.value != item){
    prevNode = currNode
    currNode = currNode.next
  } if(!currNode){
    return 'Node not found.'} else {
      return prevNode}
  }

  function findThirdLast(list){
      let currNode = list.head
      let prevNode = list.head
      while(currNode.next.next.next !== null){
          prevNode = currNode
          currNode = currNode.next
      }
      return currNode
  }

  function findMiddle(list){
    let currNode = list.head
    let prevNode = list.head
    let listLength = 0
    let index = 0
    
    while(currNode !== null){
      listLength ++
      prevNode = currNode
      currNode = currNode.next
    } 
    let middle = (Math.ceil(listLength / 2)) - 1
    currNode = list.head
    PrevNode = list.head
    
    while(index < middle){
      prevNode = currNode
      currNode = currNode.next
      index ++
    } return currNode;
  }

 function ReverseList(list){
      let middleNode = list.head
      let firstNode = list.head
      let lastNode = list.head

      while(middleNode !== null){

        firstNode = firstNode.next
        middleNode.next = lastNode
        lastNode = middleNode        
        middleNode = firstNode
      }
        list.head = lastNode
  return lastNode }

  function findIfCycle(list){
    let tortoise = list.head
    let hare = list.head

    while(hare !== null){
      tortoise = tortoise.next
      hare = hare.next.next
      if(tortoise === hare){return true}
    } return false
  }


  main()


//Mystery function
//This function cycles through the list twice, once to get each value, and once to compare each later value
//to the current value. If two values are equal, it removes the latter, thus getting rid of all duplicates.
//Its time complexity is O(n^k)/Polynomial, because it contains a loop within a loop, which means each input
//length is run itself multipled by itself times.
function WhatDoesThisProgramDo(lst) {
    let current = lst.head; //Current starts at beginning
    while (current !== null) { //This outer WHILE statement just cycles through the list, setting each value to CURRENT
        let newNode = current; //Cycle through, starting at current value.

        while (newNode.next !== null) { //End when reaches end of list.
            if (newNode.next.value === current.value) { //If the value of any individual node AFTER current equals current,
                newNode.next = newNode.next.next; //Remove it from the list!
            }
            else {
                newNode = newNode.next; //Otherwise, keep going.
            }
        }
        current = current.next;
    }
}

//Reverse a list
function ReverseList(list){
    let middleNode = list.head
    let firstNode = list.head
    let lastNode = list.head

    while(middleNode !== null){

      firstNode = firstNode.next
      middleNode.next = lastNode
      lastNode = middleNode        
      middleNode = firstNode
    }
      list.head = lastNode
return lastNode }

//Third from end
function findThirdLast(list){
    let currNode = list.head
    let prevNode = list.head
    while(currNode.next.next.next !== null){
        prevNode = currNode
        currNode = currNode.next
    }
    return currNode
}

//Middle
function findMiddle(list){
  let currNode = list.head
  let prevNode = list.head
  let listLength = 0
  let index = 0
  
  while(currNode !== null){
    listLength ++
    prevNode = currNode
    currNode = currNode.next
  } 
  let middle = (Math.ceil(listLength / 2)) - 1
  currNode = list.head
  PrevNode = list.head
  
  while(index < middle){
    prevNode = currNode
    currNode = currNode.next
    index ++
  } return currNode;
}

//Reverse list
function ReverseList(list){
    let middleNode = list.head
    let firstNode = list.head
    let lastNode = list.head

    while(middleNode !== null){

      firstNode = firstNode.next
      middleNode.next = lastNode
      lastNode = middleNode        
      middleNode = firstNode
    }
      list.head = lastNode
return lastNode }



//Find if cycle
function findIfCycle(list){
    let tortoise = list.head
    let hare = list.head

    while(hare !== null){
      tortoise = tortoise.next
      hare = hare.next.next
      if(tortoise === hare){return true}
    } return false
  }


//Sort list
function sortList(list){
    let currentNode = list.head
    let head = list.head
    let store;
    let keepSorting = true;
    
    while(keepSorting){
      keepSorting = false;
      
      while(currentNode.next !== null){
        if(currentNode.value > currentNode.next.value){
          store = currentNode.value
          currentNode.value = currentNode.next.value
          currentNode.next.value = store
          keepSorting = true
        }
        currentNode = currentNode.next
      }
      if(!currentNode.next){
        currentNode = list.head
      }
    } return list
  }


main()
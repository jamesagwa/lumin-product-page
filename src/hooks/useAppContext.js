import React, { useContext } from "react";

import { AppContext } from '../config'

/**
 * Custom hook for handling app state and data
 * though its currently doing too much, it should be broken further in an ideal prod/enterprise env
 * @example
 * const {state, setState} = useAppContext()
 */

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`useAppContext must be used within an AppProvider`);
  }
  const [state, setState] = context;
  
  //   helper
  const hasItemWithId = (items, itemID) => {
      return items.find(item => item.id === itemID)
  }

  // extended methods
  const increaseQuantity = (item) => {
    item.quantity += 1
    setState((prevState) => {
        const items = prevState.items
        const index = items.findIndex(itm => itm.id === item.id)
        items.splice(index,1,item)

         return {
             ...state, items
         }
    })


  }
  const decreaseQuantity = (item) => {
    item.quantity -= 1

    if (item.quantity === 0) {
        setState((prevState) => {
            const items = prevState.items
            const index = items.findIndex(itm => itm.id === item.id)
            items.splice(index,1)
    
             return {
                 ...state, items
             }
        })
        return
    }

    setState((prevState) => {
        const items = prevState.items
        const index = items.findIndex(itm => itm.id === item.id)
        items.splice(index,1,item)

         return {
             ...state, items
         }
    })
  }

  const currencyChanged = (currency) => {}

  const addItem  = item => {
      let { items } = state
      item.quantity = 1

      if (hasItemWithId(items,item.id)) {
          const oldItem = hasItemWithId(items,item.id)
          increaseQuantity(oldItem)
          return
      }
      
      items = [...items, item]
      setState({...state, showCart: !state.showCart, items})
  }

  const showCart = () => setState({...state, showCart: !state.showCart})

  return {
    state,
    setState,
    addItem,
    showCart,
    increaseQuantity,
    decreaseQuantity,
    currencyChanged
  };
}
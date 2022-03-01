import * as React from 'react'
import { Menu, MenuItem } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { cardMenuOpen, toggleCardMenu } from '../../features/layoutSlice'

type menu = {
  index: number
}

const MenuM = (props: menu) => {
  const dispatch = useAppDispatch()
  const { index } = props
  const ancher = document.getElementById(`card${index}`)
  const isOpen = useAppSelector(cardMenuOpen)[index]

  const hancleClick = (): void => {
    dispatch(toggleCardMenu(index))
  }

  return (
    <Menu anchorEl={ancher} open={isOpen} onClose={hancleClick} elevation={0}>
      <MenuItem onClick={hancleClick}>Bookmark</MenuItem>
      <MenuItem onClick={hancleClick}>Delete</MenuItem>
    </Menu>
  )
}
export default MenuM
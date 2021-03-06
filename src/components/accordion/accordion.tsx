/* eslint-disable react/jsx-wrap-multilines */
import * as React from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import themeMaker from '../../features/themeMaker'
import { toggleAccordion, accordionDrop } from '../../features/layoutSlice'

type accordion = {
  index: number
}

const AccodrionM = (props: accordion) => {
  const { index } = props
  const { bgColor, txtColor } = themeMaker()
  const dispatch = useAppDispatch()
  const isExpanded = useAppSelector(accordionDrop)[index]

  const handleDrop = (): void => {
    dispatch(toggleAccordion(index))
  }

  return (
    <Accordion
      expanded={isExpanded}
      onChange={handleDrop}
      sx={{
        background: bgColor,
        color: txtColor,
      }}
    >
      <AccordionSummary
        expandIcon={
          <MoreHorizIcon
            sx={{
              color: txtColor,
            }}
          />
        }
      >
        {`AccordionSummary${index}`}
      </AccordionSummary>
      <AccordionDetails>
        Using this approach in production is discouraged though - the client has to download the
        entire library, regardless
      </AccordionDetails>
    </Accordion>
  )
}

export default AccodrionM

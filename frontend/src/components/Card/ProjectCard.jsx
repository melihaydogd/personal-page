import { Box, Button, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { MyCard } from './MyCard'

export const ProjectCard = (props) => {
  return (
    <MyCard sx={{padding:"3rem 1rem"}}>
      <Box display="flex" justifyContent="center">
        <img
          src={props.cardInfo.image}
          alt="project"
          height={300}
          width="300"
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" m="0" mt="2rem">
          {props.cardInfo.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{display: props.cardInfo.certificate !== null ? "inline-flex":"none"}}>Certificate</Button>
        <Button size="small" sx={{display: props.cardInfo.link !== null ? "inline-flex":"none"}}>{props.cardInfo.link.includes("udemy") ? "Course": "Wiki"}</Button>
        <Button size="small" sx={{display: props.cardInfo.gitHub !== null ? "inline-flex":"none"}}>GitHub</Button>
      </CardActions>
    </MyCard>
  )
}

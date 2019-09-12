import React from 'react'
import Card from '../Card'
import './cardList.css'

export default function CardList({robots}){

    return (robots.map((v,i)=><Card key={i}id={v.id} name={v.name} email={v.email}/>))
}
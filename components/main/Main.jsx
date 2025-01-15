import React from 'react'
import Card from './Card'

function Main() {
  return (
    <div className='py-20'>
        <section></section>
        <section className="grid grid-cols-3 gap-8 row-gap-4 px-8">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        </section>
    </div>
  )
}

export default Main
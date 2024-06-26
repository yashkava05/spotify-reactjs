import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItems from './AlbumItems'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className='mb-4'>
        <h1 className='text-2xl font-bold my-5'>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((item, index) => (<AlbumItems key={index} name={item.name} id={item.id} desc={item.desc} image={item.image} />))}
          </div>
      </div>
      <div className='mb-4'>
        <h1 className='text-2xl font-bold my-5'>Today's Biggest Hits</h1>
        <div className='flex overflow-auto'>
          {songsData.map((item, index) => (<SongItem key={index} name={item.name} image={item.image} id={item.id} desc={item.desc} />))}
          </div>
      </div>
    </>
  )
}

export default DisplayHome
import React from 'react'
import Photo from './../components/Photo'


const PhotoViewer = props => {

    const displayPhotos = () => {
        return props.docs.map(photo => {
            
            return <Photo path={photo.filePath} key={photo.id}/>;
        })

    }
    return (
        <>
        <section>{displayPhotos()}</section>
        </>
    )
    

}



export default PhotoViewer
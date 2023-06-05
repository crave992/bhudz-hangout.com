"use client"

import { useState } from 'react';
import { firestore, storage } from '@/firebase/config';
import { Image } from '@/services/Image.model'

export const ImageService = () => {
  const [images, setImages] = useState<Image[]>([]);

  const getImage = async (id: string): Promise<Image | undefined> => {
    const imageRef = firestore.collection('gallery').doc(id);
    const doc = await imageRef.get();
    if (!doc.exists) {
      return undefined;
    }
    const data = doc.data();
    const image: Image = {
      id: doc.id,
      src: data?.src,
      filename: data?.filename,
      dateUploaded: data?.dateUploaded.toDate(),
    };
    return image;
  };
  
  const getImages = async () => {
    const imagesRef = firestore.collection('gallery');
    const snapshot = await imagesRef.get();
    const images = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        src: data.src,
        filename: data.filename,
        dateUploaded: data.dateUploaded.toDate(),
      };
    });
    setImages(images);
  };

  const uploadImage = async (file: File) => {
    const filename = file.name;
    const storageRef = storage.ref(`gallery/${filename}`);
    const uploadTask = storageRef.put(file);
    await uploadTask;
    const downloadURL = await storageRef.getDownloadURL();
    const imageRef = firestore.collection('gallery').doc();
    const dateUploaded = new Date();
    await imageRef.set({
      src: downloadURL,
      filename,
      dateUploaded,
    });
    const image = {
      id: imageRef.id,
      src: downloadURL,
      filename,
      dateUploaded,
    };
    setImages([...images, image]);
  };

  const updateImage = async (id: string, data: Partial<Image>) => {
    const imageRef = firestore.collection('gallery').doc(id);
    await imageRef.update(data);
    const updatedImages = images.map((image) => {
      if (image.id === id) {
        return {
          ...image,
          ...data,
        };
      }
      return image;
    });
    setImages(updatedImages);
  };

  const deleteImages = async (ids: string[]) => {
    const batch = firestore.batch();
    ids.forEach((id) => {
      const imageRef = firestore.collection('gallery').doc(id);
      batch.delete(imageRef);
      const storageRef = storage.ref(`gallery/${id}`);
      storageRef.delete();
    });
    await batch.commit();
    const newImages = images.filter((image) => !ids.includes(image.id));
    setImages(newImages);
  };

  return {
    images,
    getImage,
    getImages,
    uploadImage,
    updateImage,
    deleteImages,
  };
};

export default ImageService;
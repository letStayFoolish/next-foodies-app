"use client"

import React, {ChangeEvent, useRef, useState} from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

type Props = {
    label: string,
    name: string
}

export const ImagePicker: React.FC<Props> = ({name, label}) => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    const [pickedImage, setPickedImage] = useState<string | null>(null)

    const handlePickClick = () => {
        inputRef.current?.click()
    }

    const handlePreviewImage = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]

        if (!file) {
            setPickedImage(null)
            return;
        }

        const fileReader = new FileReader() // generate data url - so it can be used as src element

        fileReader.onload = () => {
            setPickedImage(fileReader.result as string)
        }

        fileReader.readAsDataURL(file); // This fileReader.onload as soon as this method fileReader.readAsDataURL(file) been done;
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {pickedImage ? <Image src={pickedImage} alt="The image selected by the user." fill/> :
                        <p>No image picked yet.</p>}
                </div>
                <input ref={inputRef} onChange={handlePreviewImage} type="file" className={classes.input} name={name}
                       id={name} accept="image/png, image/jpeg" required/>

                <button onClick={handlePickClick} className={classes.button} type="button">Pick an image</button>
            </div>
        </div>
    );
};

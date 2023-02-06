import React, { useState, useRef } from "react"
import clsx from "clsx"
import { defaultStyles } from "../defaultStyles"

export interface FileInputProps {
  hasError?: boolean
  className?: string
  name: string
  setFile: React.Dispatch<File | undefined>
}

// TODO: Add stylable and hidable label
export const FileInput = ({
  className,
  hasError = false,
  setFile,
  name,
}: FileInputProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null!)
  const [fileName, setFileName] = useState<string>()

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!fileInputRef.current) return
    const [currentFile] = fileInputRef.current.files as FileList

    if (!currentFile) {
      setFile(undefined)
      setFileName(undefined)
    }

    setFile(currentFile)
    setFileName(currentFile.name)
  }

  const styles = {
    wrapper: clsx(
      "flex justify-between items-center",
      "pl-2 cursor-pointer",
      defaultStyles.border(hasError),
      defaultStyles.focus(),
      className,
    ),
    label: clsx(
      "px-3 py-1",
      "cursor-pointer",
      "border-l-2 border-gray-300",
      "hover:bg-purple-100",
      "active:bg-purple-200",
    ),
    fileName: clsx(fileName ? "text-gray-800" : "text-gray-500"),
  }

  return (
    <div
      role="input"
      className={styles.wrapper}
      tabIndex={0}
      onClick={handleClick}
    >
      {/* Actual hidden file input hidden  */}
      <input
        onChange={handleChange}
        ref={fileInputRef}
        type="file"
        className="hidden"
        name={name}
        id={name}
      />
      {/* Visible Elements */}
      <span className={styles.fileName}>{fileName ?? "Empty"}</span>
      <label role="button" className={styles.label}>
        Select a file
      </label>
    </div>
  )
}

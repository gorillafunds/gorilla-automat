import React, { Fragment } from "react"
import clsx from "clsx"

export type ConfirmDataListProps = {
  className?: string
}

export const ConfirmDataList = ({ className }: ConfirmDataListProps) => {
  const styles = clsx("grid grid-cols-4 gap-y-2", className)
  return (
    <dl className={styles}>
      {mockDataList.map(listItem => (
        <Fragment key={listItem.title}>
          <dt className="text-gray-600">{listItem.title}</dt>
          <dd className="col-span-3">{listItem.value}</dd>
        </Fragment>
      ))}
    </dl>
  )
}

const mockDataList = [
  {
    title: "Shop",
    value: "SoopaDoopa",
  },
  {
    title: "Price",
    value: "1 Near",
  },
  {
    title: "Copies",
    value: 1,
  },
  {
    title: "Title",
    value: "My SoopaDoopa NFT",
  },
  {
    title: "Description",
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, vitae? Tenetur deserunt aspernatur sunt natus corrupti explicabo quibusdam, accusantium maxime?",
  },
]

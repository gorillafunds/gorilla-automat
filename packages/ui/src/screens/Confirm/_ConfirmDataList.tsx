import { Fragment } from "react"
import clsx from "clsx"
import { useDataList } from "./_useDataList"

export type ConfirmDataListProps = {
  className?: string
}

export const ConfirmDataList = ({ className }: ConfirmDataListProps) => {
  const dataList = useDataList()

  const styles = clsx("grid grid-cols-4 gap-y-2", className)
  return (
    <dl className={styles}>
      {dataList.map((listItem) => (
        <Fragment key={listItem.title}>
          <dt className="text-gray-600">{listItem.title}</dt>
          <dd className="col-span-3">{listItem.value}</dd>
        </Fragment>
      ))}
    </dl>
  )
}

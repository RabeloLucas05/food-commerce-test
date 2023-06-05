import { SkeletonElement } from './styles'

//interface no typescript sempre importante
export interface SkeletonProps {
  type: 'title' | 'text' | 'image' | 'thumbnail'
}

export function Skeleton({ type }: SkeletonProps) {
  return <SkeletonElement type={type} />
}

'use client'

import { Input } from "@/components/ui/input"
import Image from "next/image"

interface LocalSearchbarProps {
	route: string
	iconPosition: string
	imgSrc: string
	placeholder: string
	otherClasses?: string
}

const LocalSearchbar = ({route, iconPosition, imgSrc, placeholder, otherClasses} : LocalSearchbarProps) => {
  return (
    <div className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}
			${iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'}
		`}>
      <Image src={imgSrc} alt="Search" width={24} height={24} className="cursor-pointer" />
			<Input 
				type="text"
				placeholder={placeholder}
				className="paragraph-regular no-focus placeholder text-dark400_light700 background-light800_darkgradient border-none shadow-none outline-none"
			/>
    </div>
  )
}
export default LocalSearchbar
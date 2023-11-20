import { faBathtub, faBed, faCar, faDog } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import numeral from "numeral"

export const PropertyCard = ({ 
    title, 
    destinations, 
    bedrooms, 
    bathrooms, 
    price, 
    hasParking, 
    petFriendly, 
    image
 }) => {
    return (
        <Link
        className="border-2 border-gray-200  rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
        href={destinations}>
            <div className="flex w-full  ">
                <Image src={image} 
                height={300} 
                width={400} 
                className="object-cover max-h-none"
                alt=""
                />
            </div>
            <div className="mt-3 text-lg font-bold">{title}</div>
            <div className="text-lg">€{numeral(price).format("0,0")}</div>
            <div className="flex justify-between text-sm mt-3">
                <div>
                <FontAwesomeIcon icon={faBathtub} />
                <span className="pt-2"> {bathrooms} bathrooms</span>
                </div>
                <div>
                <FontAwesomeIcon icon={faBed} />
                <span className="pt-2"> {bedrooms} bedrooms</span>
                </div>
            </div>
            {(!!hasParking || !!petFriendly) && (
                <div className="flex justify-between text-sm mt-3">
                <div>
                    {!!hasParking && 
                        <>
                        <FontAwesomeIcon icon={faCar} />
                        parking available
                        </>
                        }
                </div>
                <div>
                {!!petFriendly && 
                        <>
                        <FontAwesomeIcon icon={faDog} />
                        petFriendly
                        </>
                        }
                </div>
                </div>
            )}
        </Link>
    )
 }
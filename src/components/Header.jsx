import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react'
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react'
// hired@123
const Header = () => {
    const [showSignin, setshowSignin] = useState(false)
    const handleOverlayclick = (e) => {
        if (e.target === e.currentTarget) {
            setshowSignin(false)

        }
    }
    const [search, setSearch] = useSearchParams()

    useEffect(() => {
        if (search.get("sign-in")) {
            setshowSignin(true)
        }

    }, [search])
    return (
        <>


            <nav className=' px-2 py-4 flex justify-between items-center'>
                <Link>
                    <img src="/logo.png" alt="" className=' h-20' />
                </Link>
                {/* <Button variant="outline">Login</Button> */}
                <div className="flex gap-8 ">
                    <SignedOut>
                        {/* <SignInButton /> */}
                        <Button onClick={() => setshowSignin(true)} variant="outline">Login</Button>
                    </SignedOut>
                    <SignedIn>
                        <Button variant="destructive" className=" rounded-full">
                            <PenBox size="20px" className=' mr-2' />
                            Post a Job
                            <Link to="/post-job"></Link>
                        </Button>

                        <UserButton appearance={{ elements: { avatarBox: "w-10 h-10" } }}>
                            <UserButton.MenuItems>
                                <UserButton.Link label='My Jobs' labelIcon={<BriefcaseBusiness size={15} />} href='/my-jobs'  />
                                <UserButton.Link label='My Jobs' labelIcon={<Heart size={15}  />} href='/saved-jobs' />
                            </UserButton.MenuItems>

                        </UserButton>
                    </SignedIn>
                </div>
            </nav>
            {showSignin &&
                <div onClick={handleOverlayclick} className=" fixed flex inset-0 items-center justify-center bg-black bg-opacity-50 ">
                    <SignIn
                        signUpForceRedirectUrl='/onboarding'
                        fallbackRedirectUrl='/onboarding'
                    />
                </div>
            }
        </>
    )
}

export default Header
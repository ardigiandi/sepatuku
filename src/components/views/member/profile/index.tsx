import MemberLayout from "@/components/layouts/MemberLayout"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Image from "next/image"

const ProfileMemberViews = ({ profile }: any) => {
    return (
        <MemberLayout>
            <h1 className="text-2xl font-semibold">Profile</h1>
            <div className=" flex flex-col lg:flex-row lg:items-start items-center gap-10 mt-10">
                <div className="avatar lg:w-[30%] w-full py-5 border flex flex-col items-center justify-center px-5">
                    {/* <Image
                        src={profile.image}
                        alt="avatar"
                        width={200}
                        height={200}
                        priority={true}
                        className="rounded-full" /> */}
                    <label
                        className="mt-4 px-4 bg-gray-300 py-4"
                        htmlFor="upload-image">
                        <p className="text-sm flex items-center justify-center text-center">Upload a ner avatar, larger image will be resized automatically</p>
                        <p className="text-sm text-center"><br /> Maximum upload size is <b>1 MB</b></p>
                    </label>
                    <input
                        className="absolute opacity-0 z-[-1]"
                        type="file"
                        name="image"
                        id="upload-image"
                    />
                </div>
                <div className="detail flex flex-col lg:w-[75%] w-full border px-5 py-5 gap-2">
                    <form action="">
                        <Input
                            label="Fullname"
                            type="text"
                            name="fullname"
                            defaultValue={profile.fullname}
                        />
                        <Input
                            label="Email"
                            type="email"
                            name="email"
                            defaultValue={profile.email}
                        />
                        <Input
                            label="Phone"
                            type="number"
                            name="phone"
                            defaultValue={profile.phone}
                        />
                        {/* <Input
                        label="Password"
                        type="password"
                        name="password"
                        defaultValue={profile.password}
                    /> */}
                        <Button type="submit" className="mt-4 bg-black text-white py-1 px-2 rounded-md">Update Profile</Button>
                    </form>
                </div>
            </div>
        </MemberLayout>
    )
}

export default ProfileMemberViews
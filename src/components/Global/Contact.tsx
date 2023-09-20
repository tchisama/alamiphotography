import { Button } from "../ui/button"

function Contact() {
  return (
    <div>
           <hr className="w-[50%] my-12 mx-auto" />
    <div className="flex gap-8 container mx-auto my-10 items-start">
        <img className="rounded-2xl drop-shadow-2xl -rotate-2 w-[25vw] " src="../assets/contact.png" alt=""/>
        <div className="flex flex-col gap-4 flex-1 px-8">
            <h1 className="text-3xl font-bold ">GET IN TOUCH</h1>
            <h4 className="text-gray-500">You can also write to me directly via contact@alamiphotography.com or call +212676545984</h4>
            <div className="flex flex-col w-full">
                <div className="flex w-full gap-4">
                    <input placeholder="first name" className="border-b flex-1 py-4 text-xl outline-none px-2" type="text" name="" id=""/>
                    <input placeholder="last name" className="border-b flex-1 py-4 text-xl outline-none px-2" type="text" name="" id=""/>
                </div>
                <div className="flex w-full gap-4">
                    <input placeholder="email address" className="border-b flex-1 py-4 text-xl outline-none px-2" type="text" name="" id=""/>
                    <input placeholder="phone number" className="border-b flex-1 py-4 text-xl outline-none px-2" type="text" name="" id=""/>
                </div>
                <div className="flex w-full gap-4">
                    <input placeholder="object" className="border-b flex-1 py-4 text-xl outline-none px-2" type="text" name="" id=""/>
                    <input placeholder="ceremony location" className="border-b flex-1 py-4 text-xl outline-none px-2" type="text" name="" id=""/>
                </div>
                <div className="flex w-full gap-4">
                    <input placeholder="scheduled date" className="border-b flex-1 py-4 text-xl outline-none px-2" type="text" name="" id=""/>
                    <input placeholder="how did you find us?" className="border-b flex-1 py-4 text-xl outline-none px-2" type="text" name="" id=""/>
                </div>
                <div className="flex w-full gap-4">
                    <textarea placeholder="message" className="border-b h-36 flex-1 py-4 text-xl outline-none px-2" name="" id=""></textarea>
                </div>
                <div className="py-4">
                    <Button size={"lg"} className="text-lg">Submit</Button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
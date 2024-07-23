import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Index() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[1256px] h-[1941px]">
        <div className="w-full h-[689px] custom-bg">
          <div className="flex flex-row justify-between items-center p-5">
            <div className="flex flex-row gap-2 ml-5">
              <Link to="/">
                <img
                  src="/assets/tahir/banner-1.png"
                  style={{ width: "32px", height: "32px" }}
                />
              </Link>
              <Link to="https://t.me/Qanonsolanaportal">
                <img
                  src="/assets/tahir/banner-2.png"
                  style={{ width: "30px", height: "30px" }}
                />
              </Link>
              <Link to="https://x.com/Qanonsolana?s=09">
                <img
                  src="/assets/tahir/banner-3.png"
                  style={{ width: "30px", height: "30px" }}
                />
              </Link>
            </div>
            <div>
              <img
                src="/assets/tahir/Link.png"
                style={{ width: "196px", height: "68px" }}
              />
            </div>
          </div>
          <div className="ml-[130px] mt-[80px]">
            <img
              src="/assets/tahir/slogan.png"
              style={{ width: "399px", height: "383px" }}
            />
          </div>
        </div>
        <div className="h-[1252px] w-full flex flex-col justify-center bg-[#800000]">
          <div className="w-[1200px] h-[997px] flex justify-center">
            <div className="w-[681px] h-full flex flex-col justify-center">
              <div className="mt-28 flex justify-center my-12">
                <img
                  src="/assets/tahir/pfp_maker.png"
                  style={{ width: "325px" }}
                />
              </div>
              <div className="w-[681px] h-[372px] flex justify-center items-center bg-gray-100 box-border py-20">
                <Card className="w-[342px] h-[332px] items-center">
                  <CardBody>
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-5 text-center"
                    >
                      Put your Mask on!
                    </Typography>
                    <div className="w-[302px] h-[152px] border border-gray-300 rounded-xl"></div>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="col-span-1">
                        <Button className="">Upload Image</Button>
                      </div>
                      <div className="col-span-1">
                        <Button className="bg-[#800000]">Finish the Job</Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>

              <div className="my-12 flex justify-center">
                <img
                  src="/assets/tahir/banner_maker.png"
                  style={{ width: "325px" }}
                />
              </div>
              <div className="w-[681px] h-[372px] flex justify-center items-center bg-gray-100 box-border py-20">
                <Card className="w-[342px] h-[332px] items-center">
                  <CardBody>
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-5 text-center"
                    >
                      Modify your banner!
                    </Typography>
                    <div className="w-[302px] h-[152px] border border-gray-200 rounded-xl"></div>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="col-span-1">
                        <Button className="">Upload Image</Button>
                      </div>
                      <div className="col-span-1">
                        <Button className="bg-[#800000] w-full">Save</Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
          <div className="mt-32">
            <Typography className=" text-center text-lg text-gray-100">
              Bbaj9k5S1Us2RepTMrejjaPYDtLdmqGNZT11puQCpump
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

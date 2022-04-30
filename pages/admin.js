import { useState, useEffect } from "react";
import Head from "next/head";

import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import ViewStatMenu from "../components/admin/viewstats/ViewStatMenu";
import ManageUserMenu from "../components/admin/manageusers/ManageUserMenu";
import CreateCorporation from "../components/admin/CreateCorporation";
import HireWorker from "../components/admin/HireWorker";
import ReplaceManager from "../components/admin/ReplaceManager";
import CreateBank from "../components/admin/CreateBank";

import CreateFee from '../components/admin/CreateFee';
import ManageOverdraft from '../components/admin/ManageOverdraft';
import ManageAccess from '../components/admin/ManageAccess';

export default function Home() {
  const [numComponent, setnumComponent] = useState(0);
  return (
    <div className="flex">
      <div>
        <ProSidebar>
          <Menu iconShape="square" popperArrow={true}>
            <MenuItem>
              <div className="m-auto text-lg font-bold"></div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setnumComponent(0);
              }}
            >
              Home
            </MenuItem>
            <MenuItem
              onClick={() => {
                setnumComponent(1);
              }}
            >
              View Stats
            </MenuItem>
            <MenuItem
              onClick={() => {
                setnumComponent(2);
              }}
            >
              Create Corporation
            </MenuItem>
            <MenuItem
              onClick={() => {
                setnumComponent(3);
              }}
            >
              Manage Users
            </MenuItem>
            <MenuItem
              onClick={() => {
                setnumComponent(4);
              }}
            >
              Hire Worker
            </MenuItem>
            <MenuItem
              onClick={() => {
                setnumComponent(5);
              }}
            >
              Replace Manager
            </MenuItem>
            <MenuItem
              onClick={() => {
                setnumComponent(6);
              }}
            >
              Create Fee
            </MenuItem>
            <MenuItem
              onClick={() => {
                setnumComponent(7);
              }}
            >
              Manager Overdraft
            </MenuItem>
            <MenuItem
              onClick={() => {
                setnumComponent(8);
              }}
            >
              Pay Employee
            </MenuItem>
            <MenuItem
              onClick={() => {
                setnumComponent(9);
              }}
            >
              Manage Accounts
            </MenuItem>
            <MenuItem
              onClick={() => {
                setnumComponent(10);
              }}
            >
              Create Bank
            </MenuItem>
          </Menu>
        </ProSidebar>
      </div>
      <div className="w-full">
        <div className="w-full">
          <Head>
            <title>Banking System</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main
            className={
              numComponent === 0 ? "w-full px-5 text-center h-screen" : "hidden"
            }
          >
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Admin Menu
            </h1>

            <p className="my-3 text-2xl w-full text-left">
              Choose one of the options to get started
            </p>

            <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              <div
                className="bg-yellow-500 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer"
                onClick={() => {
                  setnumComponent(1);
                }}
              >
                <p className="text-black text-2xl font-bold">View Stats</p>
              </div>
              <div
                className="bg-yellow-500 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer"
                onClick={() => {
                  setnumComponent(2);
                }}
              >
                <p className="text-black text-2xl font-bold">
                  Create Corporation
                </p>
              </div>
              <div
                className="bg-yellow-500 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer"
                onClick={() => {
                  setnumComponent(3);
                }}
              >
                <p className="text-black text-2xl font-bold">Manager Users</p>
              </div>
              <div
                className="bg-yellow-500 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer"
                onClick={() => {
                  setnumComponent(4);
                }}
              >
                <p className="text-black text-2xl font-bold">Hire Worker</p>
              </div>
              <div
                className="bg-yellow-500 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer"
                onClick={() => {
                  setnumComponent(5);
                }}
              >
                <p className="text-black text-2xl font-bold">Replace Manager</p>
              </div>
              <div
                className="bg-yellow-500 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer"
                onClick={() => {
                  setnumComponent(6);
                }}
              >
                <p className="text-black text-2xl font-bold">Create Fee</p>
              </div>
              <div
                className="bg-yellow-500 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer"
                onClick={() => {
                  setnumComponent(7);
                }}
              >
                <p className="text-black text-2xl font-bold">
                  Manage Overdraft
                </p>
              </div>
              <div
                className="bg-yellow-500 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer"
                onClick={() => {
                  setnumComponent(8);
                }}
              >
                <p className="text-black text-2xl font-bold">Pay Employees</p>
              </div>
              <div
                className="bg-yellow-500 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer"
                onClick={() => {
                  setnumComponent(9);
                }}
              >
                <p className="text-black text-2xl font-bold">Manage Accounts</p>
              </div>
              <div
                className="bg-yellow-500 rounded-xl p-5 m-5 border transform hover:scale-110 transition ease-in cursor-pointer"
                onClick={() => {
                  setnumComponent(10);
                }}
              >
                <p className="text-black text-2xl font-bold">Create Bank</p>
              </div>
            </div>
          </main>

          <main
            className={
              numComponent === 1 ? "w-full px-5 text-center h-screen" : "hidden"
            }
          >
            <ViewStatMenu title="View Stats" />
          </main>

          <main
            className={
              numComponent === 2
                ? "w-full px-5 text-center min-h-screen"
                : "hidden"
            }
          >
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Create Corporation
            </h1>
            <CreateCorporation />
          </main>

          <main
            className={
              numComponent === 3
                ? "w-full px-5 text-center min-h-screen"
                : "hidden"
            }
          >
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Manage Users
            </h1>
            <ManageUserMenu />
          </main>

          <main
            className={
              numComponent === 4
                ? "w-full px-5 text-center min-h-screen"
                : "hidden"
            }
          >
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Hire Worker
            </h1>
            <HireWorker />
          </main>

          <main
            className={
              numComponent === 5
                ? "w-full px-5 text-center min-h-screen"
                : "hidden"
            }
          >
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Replace Manager
            </h1>
            <ReplaceManager />
          </main>

          <main
            className={
              numComponent === 6
                ? "w-full px-5 text-center min-h-screen"
                : "hidden"
            }
          >
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Create Fee
            </h1>
            <CreateFee/>
          </main>

          <main
            className={
              numComponent === 7
                ? "w-full px-5 text-center min-h-screen"
                : "hidden"
            }
          >
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Manage Overdraft
            </h1>
            <ManageOverdraft/>
          </main>

          <main
            className={
              numComponent === 8
                ? "w-full px-5 text-center min-h-screen"
                : "hidden"
            }
          >
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Pay Employees
            </h1>
          </main>

          <main
            className={
              numComponent === 9
                ? "w-full px-5 text-center min-h-screen"
                : "hidden"
            }
          >
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Manage Accounts
            </h1>
            <ManageAccess/>
          </main>

          <main
            className={
              numComponent === 10
                ? "w-full px-5 text-center min-h-screen"
                : "hidden"
            }
          >
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Create Bank
            </h1>
            <CreateBank />
          </main>

          <main
            className={
              numComponent === 11
                ? "w-full px-5 text-center min-h-screen"
                : "hidden"
            }
          >
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Display Account Stats
            </h1>
          </main>

          <main
            className={
              numComponent === 12
                ? "w-full px-5 text-center min-h-screen"
                : "hidden"
            }
          >
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Display Corporation Stats
            </h1>
          </main>

          <main
            className={
              numComponent === 13
                ? "w-full px-5 text-center min-h-screen"
                : "hidden"
            }
          >
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Display Bank Stats
            </h1>
          </main>

          <main
            className={
              numComponent === 14
                ? "w-full px-5 text-center min-h-screen"
                : "hidden"
            }
          >
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Display Customer Stats
            </h1>
          </main>

          <main
            className={
              numComponent === 15
                ? "w-full px-5 text-center min-h-screen"
                : "hidden"
            }
          >
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Display Employee Stats
            </h1>
          </main>

          <main
            className={
              numComponent === 16
                ? "w-full px-5 text-center min-h-screen"
                : "hidden"
            }
          >
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Create Employee Role
            </h1>
          </main>

          <main
            className={
              numComponent === 17
                ? "w-full px-5 text-center min-h-screen"
                : "hidden"
            }
          >
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Create Customer Role
            </h1>
          </main>

          <main
            className={
              numComponent === 18
                ? "w-full px-5 text-center min-h-screen"
                : "hidden"
            }
          >
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Stop Employee Role
            </h1>
          </main>

          <main
            className={
              numComponent === 19
                ? "w-full px-5 text-center min-h-screen"
                : "hidden"
            }
          >
            <h1 className="text-5xl font-bold pt-10 w-full text-left">
              Stop Customer Role
            </h1>
          </main>
        </div>
      </div>
    </div>
  );
}

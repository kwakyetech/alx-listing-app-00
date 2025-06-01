"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const head_1 = __importDefault(require("next/head"));
const Card_1 = __importDefault(require("../components/common/Card"));
const Button_1 = __importDefault(require("../components/common/Button"));
const constants_1 = require("../constants");
const Home = () => {
    return (<div className="min-h-screen bg-gray-50">
      <head_1.default>
        <title>ALX Listing App</title>
        <meta name="description" content="Airbnb clone listing page"/>
      </head_1.default>

      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome to ALX Listing App
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {constants_1.listings.map((listing, index) => (<Card_1.default key={index} {...listing}/>))}
        </div>

        <div className="mt-6">
          <Button_1.default variant="primary" onClick={() => alert('Clicked!')}>
            Book Now
          </Button_1.default>
        </div>
      </main>
    </div>);
};
exports.default = Home;

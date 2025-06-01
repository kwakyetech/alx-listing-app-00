"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button = ({ children, onClick, variant = 'primary' }) => {
    const baseClasses = 'px-4 py-2 rounded-md font-medium';
    const variantClasses = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    };
    return (<button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>);
};
exports.default = Button;

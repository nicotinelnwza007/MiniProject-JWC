import React from 'react';

type IconProps = {
    className?: string;
    src: string;
};

export const Icon = ({ className, src }: IconProps) => (
    <img className={className} src={src} alt="Icon" />
);

const Payment = () => (
    <div>
        <Icon className="visa-icon" src="/src/app/public/image/payments/visa.png" />
    </div>
);
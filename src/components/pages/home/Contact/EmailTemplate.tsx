
interface EmailTemplateProps {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

export const EmailTemplate = ({
    name,
    email,
    phone,
    service,
    message
}: EmailTemplateProps) => (
    <div style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#f9f9f9',
    }}>
        <span style={{
            display: 'block',
            marginBottom: '10px',
        }}>
            <strong style={{ fontWeight: 'bold' }}>Nombre: </strong>{name}
        </span>
        <span style={{
            display: 'block',
            marginBottom: '10px',
        }}>
            <strong style={{ fontWeight: 'bold' }}>Correo: </strong>{email}
        </span>
        <span style={{
            display: 'block',
            marginBottom: '10px',
        }}>
            <strong style={{ fontWeight: 'bold' }}>Teléfono: </strong>{phone}
        </span>
        <span style={{
            display: 'block',
            marginBottom: '10px',
        }}>
            <strong style={{ fontWeight: 'bold' }}>Servicio: </strong>{service}
        </span>
        <span style={{
            display: 'block',
            marginBottom: '10px',
        }}>
            <strong style={{ fontWeight: 'bold' }}>Mensaje: </strong>{message}
        </span>
    </div>
);
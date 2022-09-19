import { IsEmail } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class BodyLoginDTO {
    @Expose()
    @IsEmail()
    readonly username!: string;

    @Expose()
    readonly password!: string;
}

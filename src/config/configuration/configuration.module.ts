import { Module } from '@nestjs/common';
import { ConfigurationController } from './configuration.controller';
import { Configuration } from './configuration';
import { ConfigurationService } from './configuration.service';

@Module({
  controllers: [ConfigurationController],
  providers: [Configuration, ConfigurationService],
})
export class ConfigurationModule {}

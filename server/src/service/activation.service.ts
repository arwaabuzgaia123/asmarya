import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { ActivationDTO } from '../service/dto/activation.dto';
import { ActivationMapper } from '../service/mapper/activation.mapper';
import { ActivationRepository } from '../repository/activation.repository';

const relationshipNames = [];

@Injectable()
export class ActivationService {
  logger = new Logger('ActivationService');

  constructor(@InjectRepository(ActivationRepository) private activationRepository: ActivationRepository) {}

  async findById(id: number): Promise<ActivationDTO | undefined> {
    const options = { relations: relationshipNames };
    const result = await this.activationRepository.findOne(id, options);
    return ActivationMapper.fromEntityToDTO(result);
  }

  async findByFields(options: FindOneOptions<ActivationDTO>): Promise<ActivationDTO | undefined> {
    const result = await this.activationRepository.findOne(options);
    return ActivationMapper.fromEntityToDTO(result);
  }

  async findAndCount(options: FindManyOptions<ActivationDTO>): Promise<[ActivationDTO[], number]> {
    options.relations = relationshipNames;
    const resultList = await this.activationRepository.findAndCount(options);
    const activationDTO: ActivationDTO[] = [];
    if (resultList && resultList[0]) {
      resultList[0].forEach(activation => activationDTO.push(ActivationMapper.fromEntityToDTO(activation)));
      resultList[0] = activationDTO;
    }
    return resultList;
  }

  async save(activationDTO: ActivationDTO, creator?: string): Promise<ActivationDTO | undefined> {
    const entity = ActivationMapper.fromDTOtoEntity(activationDTO);
    if (creator) {
      if (!entity.createdBy) {
        entity.createdBy = creator;
      }
      entity.lastModifiedBy = creator;
    }
    const result = await this.activationRepository.save(entity);
    return ActivationMapper.fromEntityToDTO(result);
  }

  async update(activationDTO: ActivationDTO, updater?: string): Promise<ActivationDTO | undefined> {
    const entity = ActivationMapper.fromDTOtoEntity(activationDTO);
    if (updater) {
      entity.lastModifiedBy = updater;
    }
    const result = await this.activationRepository.save(entity);
    return ActivationMapper.fromEntityToDTO(result);
  }

  async deleteById(id: number): Promise<void | undefined> {
    await this.activationRepository.delete(id);
    const entityFind = await this.findById(id);
    if (entityFind) {
      throw new HttpException('Error, entity not deleted!', HttpStatus.NOT_FOUND);
    }
    return;
  }
}
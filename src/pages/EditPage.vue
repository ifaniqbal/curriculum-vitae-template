<script setup>
import ContainerComponent from '../components/ContainerComponent.vue';
import FormSection from '../components/FormSection.vue';
import ShortText from '../components/ShortText.vue';
import ShortCompactText from '../components/ShortCompactText.vue';
import LongText from '../components/LongText.vue';
import FlexCol from '../components/FlexCol.vue';
import FlexRow from '../components/FlexRow.vue';
import AddButton from '../components/AddButton.vue';
import {useCvStore} from '../stores/cv';
import PhotoPicker from '../components/PhotoPicker.vue';
import {TransitionRoot} from '@headlessui/vue'
import UpButton from '../components/UpButton.vue';
import DownButton from '../components/DownButton.vue';
import RemoveCircleButton from '../components/RemoveCircleButton.vue';

const cvStore = useCvStore()
</script>

<template>
  <TransitionRoot
    :show="cvStore.editMode"
    enter="transition-opacity duration-75"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="transition-opacity duration-150"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <ContainerComponent class="divide-gray-200 divide-y space-y-6">
      <FlexCol>
        <FlexRow>
          <FormSection
            title="Profile"
          />
        </FlexRow>
        <FlexRow>
          <ShortCompactText
            v-model="cvStore.profile.name"
            class="w-full"
            label="Name"
          />
        </FlexRow>
        <FlexRow>
          <PhotoPicker
            v-model="cvStore.profile.preview"
            :initial="cvStore.profile.photo"
            class="w-full"
            label="Photo"
          />
        </FlexRow>
        <FlexRow>
          <ShortCompactText
            v-model="cvStore.profile.address"
            class="w-full"
            label="Address"
          />
        </FlexRow>
        <FlexRow>
          <ShortCompactText
            v-model="cvStore.profile.phone"
            class="w-full"
            label="Phone"
          />
        </FlexRow>
        <FlexRow>
          <ShortCompactText
            v-model="cvStore.profile.email"
            class="w-full"
            label="E-mail"
          />
        </FlexRow>
      </FlexCol>
      <FlexCol class="pt-6">
        <FlexRow>
          <FormSection
            title="Work Experiences"
          />
        </FlexRow>
        <FlexCol>
          <FlexCol
            v-for="(item, i) in cvStore.workExperiences"
            :key="i"
            class="ml-6"
          >
            <div
              v-if="i>0"
              class="w-full h-0"
            />
            <FlexRow>
              <div class="font-semibold text-sm text-gray-500">
                Work Experience #{{ i+1 }}
              </div>
              <div class="ml-3 flex flex-row space-x-1">
                <UpButton
                  :disabled="i === 0"
                  @click="cvStore.moveUp(cvStore.workExperiences, i)"
                />
                <DownButton
                  :disabled="i === cvStore.workExperiences.length-1"
                  @click="cvStore.moveDown(cvStore.workExperiences, i)"
                />
                <RemoveCircleButton
                  @click="cvStore.workExperiences.splice(i, 1)"
                />
              </div>
            </FlexRow>
            <FlexCol class="ml-6 border-l border-gray-200 pl-3">
              <FlexRow>
                <ShortCompactText
                  v-model="item.name"
                  class="w-full font-bold"
                  label="Position"
                />
              </FlexRow>
              <FlexRow>
                <ShortCompactText
                  v-model="item.company"
                  class="w-1/2 font-bold"
                  label="Company"
                />
                <ShortCompactText
                  v-model="item.employmentType"
                  class="w-1/2"
                  label="Employment Type"
                />
              </FlexRow>
              <FlexRow>
                <ShortCompactText
                  v-model="item.from"
                  class="w-1/3"
                  label="From"
                />
                <ShortCompactText
                  v-model="item.to"
                  class="w-1/3"
                  label="To"
                />
                <ShortCompactText
                  v-model="item.duration"
                  class="w-1/3"
                  label="Duration"
                />
              </FlexRow>
              <FlexRow
                v-for="(_, j) in item.details"
                :key="j"
              >
                <LongText
                  v-model="item.details[j]"
                  class="w-full"
                  :label="'Job Description #'+(j+1)"
                >
                  <template #extra>
                    <div class="flex flex-row space-x-1">
                      <UpButton
                        :disabled="j === 0"
                        @click="cvStore.moveUp(item.details, j)"
                      />
                      <DownButton
                        :disabled="j === item.details.length-1"
                        @click="cvStore.moveDown(item.details, j)"
                      />
                      <RemoveCircleButton @click="item.details.splice(j, 1)" />
                    </div>
                  </template>
                </LongText>
              </FlexRow>
              <FlexRow>
                <AddButton @click="item.details.push('')">
                  Job Description
                </AddButton>
              </FlexRow>
            </FlexCol>
          </FlexCol>
          <FlexRow>
            <AddButton
              @click="cvStore.workExperiences.push({
                name: '',
                company: '',
                employmentType: '',
                from: '',
                to: '',
                duration: '',
                details: [],
              })"
            >
              Work Experience
            </AddButton>
          </FlexRow>
        </FlexCol>
      </FlexCol>
      <FlexCol class="pt-6">
        <FlexRow>
          <FormSection
            title="Sections"
          />
        </FlexRow>
        <FlexCol
          v-for="(section, j) in cvStore.sections"
          :key="j"
        >
          <div
            v-if="j>0"
            class="w-full h-0"
          />
          <FlexRow>
            <ShortText
              v-model="section.name"
              class="w-full font-extrabold"
              :label="'Section #'+(j+1)"
            >
              <template #extra>
                <div class="ml-3 flex flex-row space-x-1">
                  <UpButton
                    :disabled="j === 0"
                    @click="cvStore.moveUp(cvStore.sections, j)"
                  />
                  <DownButton
                    :disabled="j === cvStore.sections.length-1"
                    @click="cvStore.moveDown(cvStore.sections, j)"
                  />
                  <RemoveCircleButton
                    @click="cvStore.sections.splice(j, 1)"
                  />
                </div>
              </template>
            </ShortText>
          </FlexRow>
          <FlexCol class="ml-6">
            <FlexCol
              v-for="(sectionItem, k) in section.data"
              :key="k"
            >
              <div
                v-if="k>0"
                class="w-full h-0"
              />
              <FlexRow class="font-extrabold text-sm text-gray-500">
                {{ section.name }} #{{ k+1 }}
                <div class="ml-3 flex flex-row space-x-1">
                  <UpButton
                    :disabled="k === 0"
                    @click="cvStore.moveUp(section.data, k)"
                  />
                  <DownButton
                    :disabled="k === section.data.length-1"
                    @click="cvStore.moveDown(section.data, k)"
                  />
                  <RemoveCircleButton
                    @click="section.data.splice(k, 1)"
                  />
                </div>
              </FlexRow>
              <FlexCol class="ml-6 border-l border-gray-200 pl-3">
                <FlexRow>
                  <ShortCompactText
                    v-model="sectionItem.from"
                    class="w-1/6"
                    label="From"
                  />
                  <ShortCompactText
                    v-model="sectionItem.to"
                    class="w-1/6"
                    label="To"
                  />
                  <ShortCompactText
                    v-model="sectionItem.name"
                    class="w-2/6 font-bold"
                    label="Name"
                  />
                  <ShortCompactText
                    v-model="sectionItem.description"
                    class="w-2/6 font-bold"
                    label="Description"
                  />
                </FlexRow>
                <FlexRow
                  v-for="(_, l) in sectionItem.details"
                  :key="l"
                >
                  <LongText
                    v-model="sectionItem.details[l]"
                    class="w-full"
                    :label="'Description #'+(l+1)"
                  >
                    <template #extra>
                      <div class="ml-3 flex flex-row space-x-1">
                        <UpButton
                          :disabled="l === 0"
                          @click="cvStore.moveUp(sectionItem.details, l)"
                        />
                        <DownButton
                          :disabled="l === sectionItem.details.length-1"
                          @click="cvStore.moveDown(sectionItem.details, l)"
                        />
                        <RemoveCircleButton
                          @click="sectionItem.details.splice(l, 1)"
                        />
                      </div>
                    </template>
                  </LongText>
                </FlexRow>
                <FlexRow v-if="sectionItem.details !== undefined">
                  <AddButton @click="sectionItem.details.push('')">
                    Description
                  </AddButton>
                </FlexRow>
              </FlexCol>
            </FlexCol>
            <FlexRow>
              <AddButton
                @click="cvStore.addSectionItem(section)"
              >
                {{ section.name }}
              </AddButton>
            </FlexRow>
          </FlexCol>
        </FlexCol>
        <FlexRow>
          <AddButton
            @click="cvStore.sections.push({name: '[section name]',data: [{
              from: '',
              to: '',
              name: '',
              description: '',
              details: [],
            }]})"
          >
            Section
          </AddButton>
        </FlexRow>
      </FlexCol>
    </ContainerComponent>
  </TransitionRoot>
</template>
